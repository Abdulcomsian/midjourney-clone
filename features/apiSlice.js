import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  pricingData: null, // For pricing data
  paymentMethodsData: null, // For payment methods data
  loading: false,
  error: null,
  paymentMethod: null,
  errorPaymentMethod: null,
  paymentInitializationURL: null,
};
export const fetchPricingAndPaymentData = createAsyncThunk(
  "api/fetchPricingAndPaymentData",
  async ({ pricingEndpoint, paymentEndpoint, token }, { rejectWithValue }) => {
    try {
      // Fetch pricing data
      const pricingResponse = await fetch(pricingEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!pricingResponse.ok) {
        throw new Error("Failed to fetch pricing data");
      }

      const pricingData = await pricingResponse.json();

      // Fetch payment methods data
      const paymentResponse = await fetch(paymentEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!paymentResponse.ok) {
        throw new Error("Failed to fetch payment methods data");
      }

      const paymentMethodsData = await paymentResponse.json();

      return { pricingData, paymentMethodsData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for GET request using fetch
// export const fetchPricingData = createAsyncThunk(
//     'api/fetchPricingData',
//     async ({ endpoint, token }, { rejectWithValue }) => {
//         try {
//             const response = await fetch(endpoint, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             if (!response.ok) throw new Error(response.statusText);
//             return await response.json();
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const fetchPaymentMethods = createAsyncThunk(
//     'api/fetchPaymentMethods',
//     async ({ endpoint, token }, { rejectWithValue }) => {
//         try {
//             const response = await fetch(endpoint, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             if (!response.ok) throw new Error(response.statusText);
//             return await response.json();
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// Async thunk for POST request using fetch
export const postData = createAsyncThunk(
  "api/postData",
  async ({ endpoint, payload, token }, { rejectWithValue }) => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPaymentMethod = createAsyncThunk(
  "api/fetchPaymentMethods",
  async ({ paymentMethodEndPoint, token, package_id }, { rejectWithValue }) => {
    localStorage.setItem("package_id", package_id);
    const package_data = {
      package_id: package_id,
    };
    try {
      const paymentMethodResponse = await fetch(paymentMethodEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(package_data),
      });
      if (!paymentMethodResponse.ok) {
        throw new Error("Payment method not found");
      }
      const paymentMethod = await paymentMethodResponse.json();
      console.log("Payment Method: ", paymentMethod);
      return { paymentMethod };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const paymentInitialization = createAsyncThunk(
  "api/paymentIntilization",
  async (
    {
      paymentIntilizationEndPoint,
      token,
      selectedPaymentMethod,
      phoneNumber,
      promoCode,
    },
    { rejectWithValue }
  ) => {
    const packageId = localStorage.getItem("package_id");
    const package_intialization_data = {
      package_id: packageId,
      payment_method: selectedPaymentMethod,
      phone_number: phoneNumber,
      promo_code: promoCode,
    };
    try {
      const paymentInitializationResponse = await fetch(
        paymentIntilizationEndPoint,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(package_intialization_data),
        }
      );
      if (!paymentInitializationResponse.ok) {
        throw new Error("Payment Initialization not Successfully");
      }
      const payemntInitilizationResponseData =
        await paymentInitializationResponse.json();
      return { payemntInitilizationResponseData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the slice
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    resetState: (state) => {
      state.pricingData = null;
      state.paymentMethodsData = null;
      state.loading = false;
      state.error = null;
      state.errorPaymentMethod = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPricingAndPaymentData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPricingAndPaymentData.fulfilled, (state, action) => {
        state.loading = false;
        state.pricingData = action.payload.pricingData;
        state.paymentMethodsData = action.payload.paymentMethodsData;
      })
      .addCase(fetchPricingAndPaymentData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPaymentMethod.rejected, (state, action) => {
        state.loading = false;
        state.errorPaymentMethod = action.payload;
      })
      .addCase(fetchPaymentMethod.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentMethod = action.payload;
      })
      .addCase(paymentInitialization.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentInitializationURL =
          action.payload.payemntInitilizationResponseData.payment_data.checkoutUrl;
      });
  },
});

// Export the actions and reducer
export const { resetState } = apiSlice.actions;
export default apiSlice.reducer;
