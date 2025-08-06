export function Navbar(){
    const links = [

        {
            title: 'Guide',
            href: '#'
        },
        {
            title: 'Pricing',
            href: '#'
        },
        {
            title: 'Login',
            href: '#'
        }
    ]
    return <div className="navbar-root">
        <div className="logo">Fintech</div>
        <div className="links">
            {links.map((link,index) => 
                <a href={link.href} className="link-items" key={index}>{link.title}</a>
            )}
            <button className="btn" type="button">Start free trial</button>
        </div>
    </div>
}