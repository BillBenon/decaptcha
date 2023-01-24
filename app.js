import {PythonShell} from "python-shell";
import axios from "axios";

const register = async () => {
    const headers = {
        'Content-Type': 'application/json'
    };

    let options = {
        args: ['172.28.64.1:40000']
    }

    PythonShell.run('bypass.py', options, async (err, [, captchaKey]) => {
        console.log(captchaKey)

        let {data: {token}} = await axios.post('https://discord.com/api/v9/auth/login', {
            captcha_key: captchaKey,
            gift_code_sku_id: null,
            login: "DushimeBillBenon@gmail.com",
            login_source: null,
            password: "billBENON3***s",
            undelete: false
        }, {headers});
        console.log(token);
    });
}
register();