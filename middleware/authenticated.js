export default async function ({ store, route,redirect }) {
    // console.log("Authentication middleware runs!", context.route.name);
    const { auth } = store.state;
    
    // if (!auth.loggedIn) {
    //     if (route.name != 'login' && route.name != 'profile' &&
    //         route.name != 'forgot_password' &&
    //         route.name != 'change_password' && route.name != 'change_password') {
    //             redirect('/login')
    //     }
    // }
    // else {
    //  if(route.name=='index'){
    //     redirect("/dashboard")
    //  }
    // }


}



