const Footer = () => {
    return (
        <footer className="h-a flex justify-around items-center border-t-2 border-solid bg-cyan-200" >
            <div className="flex flex-col m-2">
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" target="_blank" href="https://twitter.com"><img className="w-5 h-5" src="/public/X.png" alt="" />Twitter</a>
            <a className="flex flex-row items-center gap-1 font-bold hover:underline" target="_blank" href="https://facebook.com"><img className="w-6 h-6" src="/public/facebook.png" alt="" />Facebook</a>
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" target="_blank" href="https://instagram.com"><img className="w-5 h-5" src="/public/instagram.png" alt="" /> Instagram</a>
            </div>
            <div className="flex flex-col m-2">
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" target="_blank" href="https://gmail.com"><img className="w-5 h-5" src="/public/gmail.png" alt="" />GoogleMail</a>
            <a className="flex flex-row items-center gap-1 font-bold hover:underline" target="_blank" href="https://whatsapp.com"><img className="w-6 h-6" src="/public/whatsapp.png" alt="" />WhatsApp</a>
            </div>
        </footer>
    )
}

export default Footer