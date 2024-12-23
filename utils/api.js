export const registerUser = async (userData) => {
  console.log("User Data", userData);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }
  );
  return response.json();
};
export const loginUser = async (email, password) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json(); // Assuming the API responds with user data or a token
};
export const registerGoogleUser = async (googleData, token, country) => {
  const { id, email, name, picture } = googleData;
  console.log(token);

  const userData = {
    name: name,
    email: email,
    social_type: "google", // Google as social type
    social_id: token, // Google ID from the response
    avatar: picture, // Avatar URL from the response
    country: country,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    throw new Error("Google login registration failed");
  }

  return response.json(); // Assuming the API responds with user data or a token
};

export const getPricing = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pricing`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    console.log(response);
  }
  return response.json();
};
export const getServiceType = async () => {
  const authToken = localStorage.getItem("token");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/service-types`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (!response.ok) {
    console.log(response);
  }
  return response.json();
};
export const getImageCreatingId = async (data) => {
  const authToken = localStorage.getItem("token");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/generate-image`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    console.log(response);
  }
  return response.json();
};
export const getImageCreatedImages = async (jobId) => {
  const authToken = localStorage.getItem("token");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/images/${jobId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (!response.ok) {
    console.log(response);
  }
  return response.json();
};
export const getUserGallery = async () => {
  const authToken = localStorage.getItem("token");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/images/mygallery`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (!response.ok) {
    console.log(response);
  }
  return response.json();
};
