import React from 'react'
import './Footer.css'
function Footer(){
    return(
        <div className="footerarea">
            <div className="footerarea_top">
                <a href="#" ><p>Back to top</p></a>
            </div>

            

            <div className="footerarea_links">
                <div className="footerarea_linkarea">
                        <span> 
                            <h2>Livraison et paiement </h2>
                            <p>Les modes et frais de livraison</p>
                            <p>Les moyens de paiement</p>
                            <p>Paiement en plusieurs fois</p>
                        </span>
                </div>

                <div className="footerarea_linkarea">
                        <span> 
                            <h2>Services et garanties</h2>
                            <p>Se créer un compte</p>
                            <p>Mon Espace Client</p>
                            <p>Garanties et assurances</p>
                            
                        </span>
                </div>

                <div className="footerarea_linkarea">
                        <span> 
                            <h2>CONTACTEZ-NOUS</h2>
                            <p>Contact Service Client</p>
                            <p>Contact Professionnels</p>
                            <p>Nos magasins</p>
                        </span>
                </div>

                <div className="footerarea_linkarea">
                        <span> 
                            <h2>INFORMATIONS LEGALES</h2>
                            <p>Conditions Générales de Vente</p>
                            <p>Conditions Générales d’Utilisation Marketplace</p>
                            <p>Protection de la vie privée et cookies</p>
                            <p>Mentions légales</p>
                        </span>
                </div>
           </div>
    </div>
    )
}

export default Footer