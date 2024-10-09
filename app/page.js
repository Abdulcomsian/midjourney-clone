import MainWrapper from './component/main/main'
import BottomNav from './component/bottom-nav/bottom-nav'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 

export default function Page() {
	return (
		<>
			<MainWrapper />
			<BottomNav />
		</>
	)
}
