import { initializeApp } from 'firebase/app';
import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(() => {
    initializeApp({
        apiKey: "AIzaSyAMAL-n2ajpuQjhpF2rkG2hDNrJNK2QrkI",
        authDomain: "interconnect-5a8b6.firebaseapp.com",
        projectId: "interconnect-5a8b6",
        storageBucket: "interconnect-5a8b6.appspot.com",
        messagingSenderId: "970860439829",
        appId: "1:970860439829:web:e0f69658af838f605be11c"
    });
});