import '../css/style.css';

function SecondarySearchBar(){
    return(
<div className="search-sec">
			<div className="container">
				<div className="search-box">
					<form>
						<input type="text" name="search" placeholder="Search keywords" />
						<button type="submit">Search</button>
					</form>
				</div>
			</div>
		</div>
    )
}
export default SecondarySearchBar