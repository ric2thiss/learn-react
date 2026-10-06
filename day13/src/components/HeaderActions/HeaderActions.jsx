import "./HeaderActions.css";
import ProfileIcon from "../../assets/profile-action-btn.png";
import WishListIcon from "../../assets/wishlist-icon.png";
import CartActionButton from "../../features/cart/components/CartActionButton";

function HeaderActions() {
    return (
        <div className="header-actions">
            <button className="header-icon-button" type="button" aria-label="Wishlist">
                <img src={WishListIcon} alt="" />
            </button>

            <CartActionButton />

            <button className="header-icon-button" type="button" aria-label="Profile">
                <img src={ProfileIcon} alt="" />
            </button>
        </div>
    );
}

export default HeaderActions;
