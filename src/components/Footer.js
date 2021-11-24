
const Footer = () => {
    return (
        <div>
            <footer className="footer py-3 border-top">
                <h6 className="mx-auto text-center">
                    Copyright &#169;
                    {
                      String( new Date (Date.now()).getFullYear())
                    }
                    
                </h6>
            </footer>
        </div>
    )
}

export default Footer
