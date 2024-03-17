import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Impressum = () => {
  return(
    <section id="impressum">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="bold text-center">Impressum</h1>
            <br />

            <div class='col-md-5 col-md-offset-3'>
              <ul className="list-unstyled">
                <li><h4 className='bold'>Square Inc.</h4></li>
                <li><p>Mennica Legacy Tower, Prosta 20</p></li>
                <li><p>00-850 Warsaw</p></li>
                <li>Poland</li>
                <br />
                <li>Managing Director: Renato Franco</li>
                <li>Comercial Register Number: --- </li>
                <li>Phone: +48 22 397 08 53</li>
                <li>Email: <Link to='mailto:kontakt@square.pl'>kontakt@square.pl</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impressum;