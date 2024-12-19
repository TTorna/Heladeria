import React from 'react';
import { IceCream, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Wave Divider */}
      <div className='bg-white'>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
        <path d="M 0,400 L 0,100 C 51.512437159011824,71.34312463366737 103.02487431802365,42.68624926733473 141,58 C 178.97512568197635,73.31375073266527 203.41293988691723,132.59812756432842 240,137 C 276.58706011308277,141.40187243567158 325.32336613430755,90.92124047535147 375,80 C 424.67663386569245,69.07875952464853 475.2935955758528,97.71691053426574 518,119 C 560.7064044241472,140.28308946573426 595.5022515622813,154.2111173875857 635,147 C 674.4977484377187,139.7888826124143 718.6973981750216,111.43861991539154 761,94 C 803.3026018249784,76.56138008460846 843.7081557376324,70.03440295084812 895,84 C 946.2918442623676,97.96559704915188 1008.469978874449,132.42376828121598 1052,140 C 1095.530021125551,147.57623171878402 1120.4119287645713,128.270523924288 1160,128 C 1199.5880712354287,127.72947607571201 1253.8823060672655,146.494136021632 1303,145 C 1352.1176939327345,143.505863978368 1396.0588469663671,121.752931989184 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="rgb(17 24 39)" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0">
        </path>
        <path d="M 0,400 L 0,233 C 31.7407170645932,241.38908200361595 63.4814341291864,249.7781640072319 108,245 C 152.5185658708136,240.2218359927681 209.8149805478477,222.27642597468832 254,231 C 298.1850194521523,239.72357402531168 329.25864367942285,275.1161320940149 376,267 C 422.74135632057715,258.8838679059851 485.15044473446096,207.2590456492521 537,202 C 588.849555265539,196.7409543507479 630.1395773827337,237.8476853089767 669,245 C 707.8604226172663,252.1523146910233 744.2912457346043,225.3502131148412 787,231 C 829.7087542653957,236.6497868851588 878.6954396788491,274.7514622316586 926,271 C 973.3045603211509,267.2485377683414 1018.9269955499992,221.64393795852453 1059,199 C 1099.0730044500008,176.35606204147547 1133.596578121154,176.67278593424336 1173,186 C 1212.403421878846,195.32721406575664 1256.6866919653846,213.6649183045019 1302,223 C 1347.3133080346154,232.3350816954981 1393.6566540173076,232.66754084774905 1440,233 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="rgb(17 24 39)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1">
        </path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IceCream className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold text-white">Vickens</span>
            </div>
            <p className="text-sm">
              Elaborando los mejores helados artesanales desde 1950
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link className="hover:text-pink-500 transition" to="/">Home</Link></li>
              <li><Link className="hover:text-pink-500 transition" to="/sabores">Sabores</Link></li>
              <li><Link className="hover:text-pink-500 transition" to="/nosotros">Nosotros</Link></li>
              <li><Link className="hover:text-pink-500 transition" to="/contacto">Pedir</Link></li>
              <li><Link className="hover:text-pink-500 transition" to="/sucursales">Ubicacion</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-sm">
              <li>Lunes a Jueves: 16:00 - 00:00</li>
              <li>Viernes: 16:00 - 01:00</li>
              <li>Sábados: 12:00 - 01:00</li>
              <li>Domingos y Feriados: 12:00 - 00:00</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/heladosvickens/" className="hover:text-pink-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/VickensHelados" className="hover:text-pink-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Gelato Dreams. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}