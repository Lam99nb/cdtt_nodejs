import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

let sendEasyEmail = async (receivedEmail) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!receivedEmail) {
				resolve({
					errCode: 1,
					errMessage: 'Missing required parameter'
				});
			} else {
				let transporter = nodemailer.createTransport({
					service: 'gmail',

					auth: {
						user: process.env.EMAIL_APP,
						pass: process.env.EMAIL_APP_PASSWORD

						// user: 'sales4.nhatlongtravel@gmail.com',

						// pass: 'haakwxilpybbetak'
					}
				});

				// send mail with defined transport object
				let infoMail = await transporter.sendMail({
					from: '"TNL Fashion 👻" <sales4.nhatlongtravel@gmail.com>', // sender address
					to: receivedEmail, // list of receivers
					subject: 'Thông báo đặt hàng thành công ',
					// text: 'That was easy!',
					html: `
					 <h4>Xin chào bạn Ngọc Lam</h4>
					<p>Địa chỉ: ngõ 20 đường Mỹ Đình, Nam Từ Liêm, Hà Nội,</p>
					<p>Số điện thoại: 0395354855,</p>


					Bạn đã đặt hàng thành công trên TNL Fashion</h4>

					`
				});

				transporter.sendMail(infoMail, function(err, info) {
					if (err) {
						console.log(err);
					} else {
						console.log(info);
					}
				});
				resolve({
					errCode: 0,
					errMessage: 'Da gui mail thanh cong'
				});
			}
		} catch (err) {
			console.log(err);
		}
	});
};

module.exports = {
	sendEasyEmail
};
