import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepostory from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Index() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    console.log('sera?');
    categoriasRepostory.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <PageDefault>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <div id={categoria.id}>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end"
              />
              <Carousel
                ignoreFirstVideo
                category={categoria}
              />
            </div>
          );
        }

        return (
          <Carousel
            category={categoria}
          />
        );
      })}

    </PageDefault>
    // <div style={{ background: '#141414' }}>
    //   <Menu />
    //
    //   <BannerMain
    //     videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
    //     url={dadosIniciais.categorias[0].videos[0].url}
    //     videoDescription="O que é Front-end"
    //   />
    //
    //   <Carousel
    //     ignoreFirstVideo
    //     category={dadosIniciais.categorias[0]}
    //   />
    //
    //   <Carousel
    //     category={dadosIniciais.categorias[1]}
    //   />
    //
    //   <Carousel
    //     category={dadosIniciais.categorias[2]}
    //   />
    //
    //   <Carousel
    //     category={dadosIniciais.categorias[3]}
    //   />
    //
    //   <Carousel
    //     category={dadosIniciais.categorias[4]}
    //   />
    //
    //   <Carousel
    //     category={dadosIniciais.categorias[5]}
    //   />
    //
    //   <Footer />
    //
    // </div>
  );
}

export default Index;
