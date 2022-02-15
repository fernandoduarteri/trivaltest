const axios = require('axios');
const { response, request } = require('express');
const { is } = require('express/lib/request');

const getBromas = async (req = request, res = response) => {


    try {

        const response = [];
        for (let i = 1; i <= 15; i++) {
            const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
            const { id, icon_url, value } = data;
            const objectBroma = {
                id,
                icon_url,
                value
            }
            if (response.length === 0) {
                response.push(objectBroma)
            } else {
                let esRepetido = false;

                for (let j = 0; j < response.length; j++) {
                    if (id === response[j].id) {
                        esRepetido=true;
                    } 
                }
                if(!esRepetido){
                    response.push(objectBroma);
                }else{
                    i--
                }

            }

        }

        res.status(200).json({
            ok: true,
            response
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
}



module.exports = {
    getBromas
}