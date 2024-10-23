"use client";
import MainWrapper from './component/main/main'


export default function Page() {
	return (
		<>
		<MainWrapper/>
			{/* <BrowserRouter>
					<Routes>
						<Route index element={<MainWrapper />}/>
						<Route path='/subscription' element={<Subscription />} />
						<Route path='/help' element={<Help />} />
						<Route path='/update' element={<Update />} />
						<Route path='/manage-profile' element={<ManageProfile />} />
						<Route path='/create-image' element={<CreateImage />} />
					</Routes>
			</BrowserRouter> */}
		</>
	)
}
