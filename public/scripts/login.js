$(function(){
	// Initialize the FirebaseUI Widget using Firebase.
	var ui = new firebaseui.auth.AuthUI(firebase.auth());
	ui.start('#firebaseui-auth-container', {
		signInOptions: [
			// List of OAuth providers supported.
			firebase.auth.GoogleAuthProvider.PROVIDER_ID
		],
		// Other config options...
	});

	var uiConfig = {
		callbacks: {
			signInSuccessWithAuthResult: function(authResult, redirectUrl) {
				// User successfully signed in.
				// Return type determines whether we continue the redirect automatically
				// or whether we leave that to developer to handle.
				return true;
			},
			uiShown: function() {
				// The widget is rendered.
				// Hide the loader.
				// document.getElementById('loader').style.display = 'none';
			}
		},
		signInFlow: 'popup',
		signInSuccessUrl: './file_list.html',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID
		]
		// Terms of service url.
		// tosUrl: '<your-tos-url>',
		// Privacy policy url.
		// privacyPolicyUrl: '<your-privacy-policy-url>'
	};

	ui.start('#firebaseui-auth-container', uiConfig);

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// 유저 로그인 됐을 때(로컬스토리지에 저장된 쿠키가 있을 때)
			var displayName = user.displayName;
			var email = user.email;
			var emailVerified = user.emailVerified;
			var photoURL = user.photoURL;
			var isAnonymous = user.isAnonymous;
			var uid = user.uid;
			var providerData = user.providerData;
		
			console.log(displayName);
		} 
		else {
			// 유저 로그아웃 됐을 때(로컬스토리지 빔)		
	  	}
	});
})