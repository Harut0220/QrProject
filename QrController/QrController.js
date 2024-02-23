import qrService from "../QrService/QrService.js"


const qrController={
    getQr:async (req,res)=>{
        try {

            const qr_generate=await qrService.getQr()
            res.status(200).send(qr_generate)
        } catch (error) {
            
        }
    }
}

export default qrController