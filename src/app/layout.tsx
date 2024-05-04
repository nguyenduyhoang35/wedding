/* eslint-disable @next/next/no-css-tags */
import "@/styles/globals.css";
import "@/styles/themify-icons.css";
import "@/styles/bootstrap.min.css";
import "@/styles/magnific-popup.css";
import "@/styles/animate.css";
// import "@/styles/owl.carousel.min.css";
// import "@/styles/owl.theme.default.min.css";

import Script from "next/script";

export default function RootLayout({ children }: any) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta
					httpEquiv="X-UA-Compatible"
					content="IE=edge"
				/>
				<title>Olivia &amp; Enrico Wedding Template</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/favicon.png"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
					integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
					integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				<Script src="/jquery.min.js" />
				<Script src="/jquery.easing.1.3.js" />
				<Script src="/jquery.magnific-popup.min.js" />
				<Script src="/jquery.waypoints.min.js" />
				
			</head>
			<body>
				<div className="preloader">
					<div className="lds-heart">
						<div></div>
					</div>
				</div>
				{children}
				<Script src="/isotope.js" />
				<Script src="/modernizr-2.6.2.min.js" />
				<Script src="/owl.carousel.min.js" />
				<Script src="/sticky-kit.min.js" />
				<Script src="/main.js" />
			</body>
		</html>
	);
}
