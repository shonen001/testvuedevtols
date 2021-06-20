export default {
    NewAddrequest(context, payload) {
       let  newOne = {
            idrequest: new Date().toUTCString,
            idCoache: payload.idCoache,
            email: payload.email,
            text: payload.text,
        }
        context.dispatch('addRequest', newOne);
    }
}