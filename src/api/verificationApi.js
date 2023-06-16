import { BASEAPIS } from "../api/BaseApis";
export const VerificationAPI = {
    VerifyAuth: async (phone) => {
        return await BASEAPIS.GETAPI('register?phone'+phone);
    },
    VerifyPhoneOtp: async (jsonbody) => {
        console.log(jsonbody)
        return await BASEAPIS.POSTAPI(jsonbody, 'verifyPhoneOtp');
    },
}