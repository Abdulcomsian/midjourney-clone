"use client";
import MainWrapper from './component/main/main'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Subscription from './subscription/page';
import Help from './help/page';
import Update from './update/page';
import ManageProfile from './manage-profile/page';
import CreateImage from './create-image/page';

export default function Page() {
	return (
		<>
			<BrowserRouter>
					<Routes>
						<Route index element={<MainWrapper />}/>
						<Route path='/subscription' element={<Subscription />} />
						<Route path='/help' element={<Help />} />
						<Route path='/update' element={<Update />} />
						<Route path='/manage-profile' element={<ManageProfile />} />
						<Route path='/create-image' element={<CreateImage />} />
					</Routes>
			</BrowserRouter>
		</>
	)
}
