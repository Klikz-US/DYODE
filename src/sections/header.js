import React, { useState } from "react";
import logo from "../logo.png";
import { CgShoppingCart } from "react-icons/cg";

export default function Header() {
	const menu_toggle = () => {
		document.getElementById("menu_toggle").classList.toggle("expanded");
		document.getElementById("navbar_mobile").classList.toggle("expanded");
	};

	return (
		<header>
			<div className="row bg-black">
				<div className="container topbar">
					<div className="wrapper">
						<h4 className="color-grey text-center m-1">
							Free Shipping on All Orders Over $75
						</h4>
					</div>
				</div>
			</div>
			<div className="row bg-main">
				<div className="container navbar">
					<div className="wrapper">
						<div className="toggle">
							<a
								id="menu_toggle"
								className="color-white sm-hide"
								data-role="expand_menu"
								rel="noopener noreferrer"
								href="javascript:;"
								onClick={menu_toggle}
							>
								<svg className="expand_icon" role="img" viewBox="0 0 24 19">
									<path
										className="expand_icon-path is-top"
										d="M1.5,0h21C23.3,0,24,0.7,24,1.5S23.3,3,22.5,3h-21C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0z"
										fill="currentColor"
									></path>
									<path
										className="expand_icon-path is-left"
										d="M1.5,8h21C23.3,8,24,8.7,24,9.5S23.3,11,22.5,11h-21C0.7,11,0,10.3,0,9.5S0.7,8,1.5,8z"
										fill="currentColor"
									></path>
									<path
										className="expand_icon-path is-right"
										d="M1.5,8h21C23.3,8,24,8.7,24,9.5S23.3,11,22.5,11h-21C0.7,11,0,10.3,0,9.5S0.7,8,1.5,8z"
										fill="currentColor"
									></path>
									<path
										className="expand_icon-path is-bottom"
										d="M1.5,16h21c0.8,0,1.5,0.7,1.5,1.5S23.3,19,22.5,19h-21C0.7,19,0,18.3,0,17.5S0.7,16,1.5,16z"
										fill="currentColor"
									></path>
								</svg>
							</a>
						</div>
						<a className="logo m-1" href="/">
							<img src={logo} width="auto" height="50" alt="logo" />
						</a>
						<div className="menu-item sm-show">
							<a className="color-grey" href="javascript:;">
								Women
							</a>
						</div>
						<div className="menu-item sm-show">
							<a className="color-grey" href="javascript:;">
								Men
							</a>
						</div>
						<div className="menu-item sm-show">
							<a className="color-grey" href="javascript:;">
								Accessories
							</a>
						</div>
						<div className="menu-item sm-show">
							<a className="color-grey" href="javascript:;">
								Sale!
							</a>
						</div>
						<div className="toggle">
							<a
								className="cart-toggle sm-hide"
								data-role="expand_cart"
								rel="noopener noreferrer"
								href="javascript:;"
							>
								<CgShoppingCart size={24} className="color-white" />
							</a>
						</div>
					</div>
				</div>
				<div id="navbar_mobile" className="container navbar-mobile sm-hide">
					<div className="wrapper d-column ">
						<div className="menu-item">
							<a className="color-grey" href="javascript:;">
								Women
							</a>
						</div>
						<div className="menu-item">
							<a className="color-grey" href="javascript:;">
								Men
							</a>
						</div>
						<div className="menu-item">
							<a className="color-grey" href="javascript:;">
								Accessories
							</a>
						</div>
						<div className="menu-item">
							<a className="color-grey" href="javascript:;">
								Sale!
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
