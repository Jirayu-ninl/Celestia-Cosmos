// c-spell: disable
'use client'

// import { useShallow } from 'zustand/react/shallow'
import { SmoothScroll, OnScrollFunctionProps } from '@nexel/cosmos/animations'
import { useUiState, NAV_DYN_TYPE, DynamicNavShareSocial } from '@/store'

const Page = () => {
  const _setDynamicNav = useUiState((st) => st.setDynamicNav)

  const onScroll = (state: OnScrollFunctionProps) => {
    _setDynamicNav([
      { type: NAV_DYN_TYPE.PROGRESS, ...state },
      { type: NAV_DYN_TYPE.BACK, href: '/' },
      {
        type: NAV_DYN_TYPE.SHARE,
        title: 'lorem ipsum',
        url: 'https://TheIceJi.com/lorem',
        img: 'https://TheIceJi.com/og.jpg',
        social: [
          DynamicNavShareSocial.facebook,
          DynamicNavShareSocial.twitter,
          DynamicNavShareSocial.pinterest,
          DynamicNavShareSocial.line,
          DynamicNavShareSocial.weibo,
        ],
      },
    ])
  }

  return (
    <>
      <SmoothScroll onScroll={onScroll}>
        <div className='flex w-dvw py-32'>
          <div className='container space-y-8 text-3xl opacity-60 [&>p]:indent-16'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              faucibus mi neque, non eleifend dolor hendrerit nec. Nullam quis
              lacus at nisi dapibus pellentesque. Aliquam vehicula feugiat
              mauris ut condimentum. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Donec vel
              sem leo. Cras posuere neque erat, at dictum nunc malesuada
              condimentum. Sed scelerisque nunc et aliquet venenatis. Nunc a
              elementum nunc, accumsan dignissim turpis. Nam nec aliquam enim,
              sed feugiat nunc. Suspendisse purus odio, tempus eu mi ut, aliquet
              euismod sapien. Nunc massa erat, imperdiet eu ultricies non,
              accumsan commodo neque.
            </p>
            <p>
              Aenean vitae ornare ligula. Praesent sed vulputate quam. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Nam tincidunt mollis consectetur. Pellentesque
              nec dolor risus. In dapibus velit ut nisl ultrices venenatis. In
              pellentesque mattis ligula, eu egestas ipsum fermentum ut.
              Suspendisse nec magna neque. Vestibulum vulputate blandit
              elementum. Donec urna nibh, luctus quis dui non, hendrerit sodales
              libero. Proin gravida est quis nibh tincidunt, vitae sodales augue
              placerat. Sed rhoncus neque ligula, at tristique arcu scelerisque
              eu. Etiam eu ligula eget mauris scelerisque lacinia eu ut est.
              Nulla ullamcorper mi eu risus commodo commodo. Maecenas at
              facilisis nisi.
            </p>
            <p>
              Cras porta lectus lectus, sed pretium mi fermentum nec. Ut non
              tempor erat. Mauris mattis, metus sed condimentum interdum, nisl
              lacus accumsan urna, in congue lectus tellus sed felis. Morbi
              vitae risus eget mi cursus congue non ac mi. Etiam at felis arcu.
              Proin vitae tristique erat. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Nam nunc
              orci, luctus quis pulvinar vitae, gravida ut ligula. Quisque
              condimentum ante at euismod hendrerit. In quis aliquam ipsum. Nam
              facilisis neque ac metus vehicula, ornare volutpat sem tristique.
            </p>
            <p>
              Suspendisse sit amet suscipit sapien. Integer dignissim a magna in
              congue. Donec viverra velit ullamcorper ipsum euismod laoreet. Nam
              fringilla, mi non efficitur interdum, nisl velit pellentesque
              justo, quis lacinia odio felis ut nisl. Sed sagittis ligula sit
              amet purus ultrices mollis. Nam efficitur consectetur malesuada.
              Morbi luctus, tellus at mattis lacinia, ipsum felis varius est,
              sed ultricies metus risus a tortor. Fusce at cursus metus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aenean vitae libero nec nisl
              congue pellentesque. Suspendisse bibendum odio nunc, nec sodales
              tortor lobortis eu. Donec euismod, dui et mattis molestie, dui mi
              sagittis tellus, id venenatis risus dolor quis sapien. Quisque
              cursus mattis felis, sed viverra nisl vulputate interdum.
              Suspendisse aliquam nec arcu sed interdum.
            </p>
            <p>
              Donec vehicula, dui ut vestibulum faucibus, elit neque consectetur
              neque, et commodo lacus tortor vehicula eros. Vestibulum iaculis
              erat ut velit sollicitudin imperdiet. Fusce elementum nisi a ex
              efficitur, eget varius ipsum pellentesque. Aenean tempor, nisl
              gravida consequat vehicula, turpis lacus accumsan arcu, ac
              pharetra risus tellus nec leo. Aliquam sem odio, dignissim quis
              posuere in, malesuada et tortor. Fusce nisl ligula, ultricies ac
              egestas volutpat, dignissim eget mauris. Donec ac sapien metus.
              Nulla luctus, velit vitae lacinia scelerisque, ipsum quam
              fringilla augue, eu euismod turpis turpis sed leo. Nunc vehicula
              tellus sed nisl euismod varius.
            </p>
            <p>
              Donec mollis, justo vitae varius euismod, mauris orci feugiat
              lorem, at tristique nulla velit in ipsum. Nullam lobortis leo
              nisl, sit amet commodo diam fermentum vel. Suspendisse pharetra eu
              ex at porttitor. Pellentesque aliquet elit nec congue eleifend.
              Nunc auctor, nunc nec bibendum faucibus, diam nulla iaculis
              libero, eget tincidunt purus risus at tortor. Fusce a ultrices
              metus. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in ante luctus, rhoncus
              mauris sit amet, vestibulum mauris. Mauris quam tortor, consequat
              sed auctor sed, eleifend et lorem. Donec a libero vitae lacus
              ultrices aliquam sed vitae purus. Nam vehicula interdum mi sed
              euismod.
            </p>
            <p>
              Proin eu varius nulla. Sed odio leo, finibus vitae augue lacinia,
              egestas porttitor ipsum. Donec erat justo, accumsan et sapien at,
              ornare faucibus nisl. Praesent malesuada tortor ac sapien ornare
              semper. Sed at fermentum dolor, et venenatis urna. Fusce ut
              aliquet sapien, maximus scelerisque ante. Vestibulum a ante risus.
              Aliquam nec euismod elit, ac fermentum dolor. Sed vel orci quis
              metus lacinia imperdiet. Fusce sagittis rhoncus massa. Aenean
              tincidunt commodo ipsum sit amet varius.
            </p>
            <p>
              Nullam a nisi erat. Nulla aliquet fermentum metus. Pellentesque
              tristique vel tellus eget imperdiet. Etiam sit amet dapibus lorem.
              Suspendisse risus libero, sagittis vel lobortis at, vulputate eu
              dolor. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Maecenas pulvinar nibh quis
              faucibus tincidunt. Etiam nisl purus, laoreet id est eu, vehicula
              commodo nunc. Cras vestibulum augue ut elit porttitor consequat.
              In hac habitasse platea dictumst. Pellentesque venenatis a nisl in
              porttitor. Vivamus consectetur erat eleifend mi venenatis, nec
              dignissim orci pulvinar. Phasellus condimentum sapien elit, eu
              sagittis dui aliquam non. Cras efficitur sem vel velit sagittis,
              at congue diam hendrerit. In tincidunt sapien sed ligula
              vestibulum consequat. Nullam at rhoncus libero. Vestibulum posuere
              laoreet semper.
            </p>
            <p>
              Suspendisse maximus ultricies egestas. Vivamus ac ligula ornare,
              sollicitudin risus vitae, lacinia est. Donec ligula mauris,
              ultricies ut consectetur a, eleifend sit amet nunc. Suspendisse ut
              lacinia urna. Nulla euismod, tellus sed placerat ultricies, velit
              lacus sollicitudin dolor, sed condimentum nunc ligula et eros.
              Donec eget velit tellus. Morbi eros urna, volutpat eu nisi eget,
              ullamcorper dictum massa.
            </p>
            <p>
              Cras interdum facilisis nulla in sollicitudin. Integer ultrices
              gravida facilisis. Cras in tempus tortor. Morbi vel vehicula mi.
              Proin hendrerit ligula eget nunc pulvinar iaculis. Curabitur id
              posuere dui, sit amet pellentesque orci. Maecenas porttitor, velit
              in posuere commodo, neque nibh semper eros, id fermentum enim
              velit id purus. Nunc ultricies rhoncus auctor. Sed eleifend
              convallis interdum. Duis lacus arcu, venenatis id elit eu, dictum
              bibendum dui. Vestibulum vitae finibus elit, facilisis maximus
              massa. Aenean quis leo vel eros placerat porttitor vitae at
              mauris. Suspendisse et justo feugiat, imperdiet lorem ullamcorper,
              condimentum neque. Aliquam et nunc vulputate, varius massa
              rhoncus, fermentum libero. Vivamus vel pulvinar nulla.
            </p>
            <p>
              Aliquam at ex convallis, gravida purus non, finibus tellus.
              Pellentesque id volutpat libero. Mauris ac varius nulla. Donec vel
              ultricies mauris, a dictum ante. Sed dui lectus, pharetra quis
              felis nec, sodales luctus est. Proin non libero eget velit blandit
              faucibus id vitae arcu. Maecenas eget nisl vel felis pretium
              facilisis. Etiam placerat quam eu euismod interdum. Etiam
              malesuada risus in ligula pellentesque blandit. Nulla molestie
              mattis imperdiet. Nullam vitae varius erat. Integer in tristique
              elit. Donec molestie turpis ut leo tincidunt convallis.
            </p>
            <p>
              Praesent mattis, risus a dignissim condimentum, lacus nulla
              bibendum ante, sit amet pellentesque enim nisl in augue. Vivamus
              dictum libero eu mi ullamcorper facilisis. Donec ut enim id mauris
              porttitor tristique vitae sed nulla. Sed fermentum lectus sed
              varius aliquet. Cras vestibulum, diam quis maximus molestie, nisl
              est faucibus odio, eu cursus velit eros quis sapien. Pellentesque
              fermentum, mauris et commodo porttitor, nunc justo imperdiet nibh,
              ac hendrerit felis odio ac sapien. Donec bibendum quis ex eget
              imperdiet. Etiam viverra, nulla eu ultricies pretium, magna felis
              fringilla nunc, non lobortis nisl risus quis nisl. Pellentesque
              sit amet nibh enim. Praesent aliquet, enim vitae rhoncus faucibus,
              sem dui tristique urna, vitae euismod risus dolor in sapien. Fusce
              nec placerat massa.
            </p>
            <p>
              Suspendisse vehicula, sapien et ullamcorper finibus, neque ante
              ultrices neque, et vestibulum eros orci id massa. Ut consequat
              diam sit amet mauris laoreet, et placerat nisi bibendum. Nunc a
              ligula luctus, aliquam eros sit amet, faucibus metus. Pellentesque
              eleifend vitae sapien non dictum. Nunc porttitor nec tortor vel
              ultrices. Pellentesque at ullamcorper turpis, nec iaculis elit.
              Proin quis metus ornare, consectetur lacus vulputate, tempor urna.
              Proin aliquam a felis sit amet tempus. Aenean suscipit volutpat
              hendrerit. Duis vitae magna mi. Morbi dictum rhoncus purus sit
              amet sodales. Fusce aliquam leo mauris, eu varius justo commodo
              eu. Maecenas mauris risus, commodo non luctus sit amet, convallis
              eu mi.
            </p>
            <p>
              In dignissim tincidunt tellus, a volutpat nisl rutrum at. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Pellentesque a molestie sapien. Donec
              ullamcorper varius hendrerit. Ut quis pellentesque elit. Mauris id
              nunc in sapien euismod fringilla sed sed turpis. Etiam porttitor
              turpis at lectus ultricies, et mollis diam blandit. Nulla luctus
              diam quis metus hendrerit, eget tincidunt odio iaculis. Nunc nec
              turpis et leo lobortis vestibulum id malesuada dui. Nullam
              porttitor risus elit. Pellentesque vestibulum sit amet tellus non
              pretium. Mauris eu interdum magna. Suspendisse potenti.
            </p>
          </div>
        </div>
      </SmoothScroll>
    </>
  )
}

export default Page
