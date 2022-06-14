

const Footer =()=> {
    return(
        <>

        <div class="grid gap-2 grid-cols-2 pl-10 bg-blue-800 pb-10">

            <div class="pt-10 pl-20">
                <h1 class="text-3xl font-bold text-white pb-5"> Contactanos </h1>
                <p class="text-lg text-white text-xl font-bold">Intituto Tecnologico de Chilpancingo</p>
                <p class="text-lg text-white font-bold mt-2">Edificio de posgrado:</p>
                <p class="text-lg text-white">TecNM campus Chilpancingo
                Av. Tecnológico 2909 Col. 10 de Mayo
                Chilpancingo, Chil. México
                C.P. 31310</p>
                <p class="text-lg text-white font-bold mt-2">Telefonos:</p>
                <p class="text-lg text-white">(678) 789 298 | (677) 678 890</p>
                <p class="text-lg text-white font-bold mt-2">Correo Electronico:</p>
                <p class="text-lg text-white">posgrado-itch.chilpancingo.tecnm.mx</p>
                <p class="text-lg text-white font-bold mt-2">Redes sociales:</p>
                <div className="flow-root mt-2">
                    <img className='float-left' src="./facebook.png" alt="" width='20px'></img>
                    <img className='float-left' src="./insta.png" alt="" width='30px'></img>
                    <img className='float-left' src="./twitter.png" alt="" width='20px'></img>
                </div>
            </div>
        
            <div class="flex m-auto pt-20">
                <img src="./map.JPG" alt="" width="600px"></img>
            </div>
        </div>

        <div class="flex pl-20">
            <img src="./baner.jpg" class="w-2/3 m-auto"></img>
            <label class="pt-5 pr-20">Copyright 2022 TecNM/Chilpancingo, Todos los derechos reservados</label>
        </div>

        </>
    );
}

export default Footer;
