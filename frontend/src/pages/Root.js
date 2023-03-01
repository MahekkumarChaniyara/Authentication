import { useSubmit,Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';
import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from './util/auth';


function RootLayout() {
  const token=useLoaderData();
  const submit= useSubmit()
  useEffect(()=>{
    if(!token){
      return;
    }

    // if(token==='EXPIRED'){
    //   submit(null,{action:'/logout',method:'post'});
    //   return;
    // }

    // const tokenDuration=getTokenDuration();

    setTimeout(()=>{
      submit(null,{action:'/logout',method:'post'});
    },1*60*60*1000)
    
  },[token,submit])
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
