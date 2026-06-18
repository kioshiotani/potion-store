import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, useMediaQuery, useTheme } from '@mui/material';

// Icons
import OpenWithIcon from '@mui/icons-material/OpenWith';
import ScienceIcon from '@mui/icons-material/Science';
import PublicIcon from '@mui/icons-material/Public';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WifiIcon from '@mui/icons-material/Wifi'

// Images
import StoreFrontImage from '../../assets/images/StoreFront.png'
import NewStoreFrontImage from '../../assets/images/NewStoreFront.png'
import BoaNotaImage from '../../assets/images/BoaNota.png'
import CovidImage from '../../assets/images/Covid.png'
import PosCovidImage from '../../assets/images/PosCovid.png'
import InternetPotionImage from '../../assets/images/InternetPotion.png'

const timelineData = [
  { year: '1867', title: 'Início da loja', desc: 'Annabelle Merigold abre as portas de sua primeira loja de poções.', icon: <StorefrontIcon />, img: StoreFrontImage },
  { year: '1920', title: 'A Grande Expansão', desc: 'Mudança para um casarão histórico com laboratório ampliado.', icon: <OpenWithIcon />, img: NewStoreFrontImage },
  { year: '1985', title: 'Inovação em Fórmulas', desc: 'Descoberta do Elixir da Boa Nota, o produto mais vendido.', icon: <ScienceIcon img/>, img: BoaNotaImage },
  { year: '2020', title: 'Fechamento Temporário', desc: 'Interrupção das atividades físicas devido à crise sanitária global.', icon: <HomeIcon />, img: CovidImage },
  { year: '2021', title: 'Reabertura', desc: 'Retorno às atividades presenciais com protocolos de segurança.', icon: <PublicIcon />, img: PosCovidImage },
  { year: '2026', title: 'Expansão Web', desc: 'Lançamento da plataforma digital para pedidos e consultas remotas.', icon: <WifiIcon />, img: InternetPotionImage },
];

export default function HistoryTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Timeline position={isMobile ? 'right' : 'alternate'}>
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
            <span className="fw-bold fs-5">{item.year}</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#B9A44C' }} >{item.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '10px', px: 2 }}>
            <div className={`d-flex flex-column ${index%2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'} align-items-center gap-3`}>
              <div>
                <h6 className="fw-bold mb-1">{item.title}</h6>
                <p className="small text-white">{item.desc}</p>
              </div>
              <div className="w-100 d-none d-md-block">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="img-fluid rounded shadow-sm" 
                  style={{ width: '100%', height: 'auto'}}
                />
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}