import React from 'react';
import styled from 'styled-components';

// MUIs
import PowerIcon from '@mui/icons-material/Power';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import WcIcon from '@mui/icons-material/Wc';
import TvIcon from '@mui/icons-material/Tv';
import TvOffIcon from '@mui/icons-material/TvOff';
import UsbIcon from '@mui/icons-material/Usb';
import UsbOffIcon from '@mui/icons-material/UsbOff';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import HvacIcon from '@mui/icons-material/Hvac';
import AirIcon from '@mui/icons-material/Air';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BedtimeOffIcon from '@mui/icons-material/BedtimeOff';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';


interface AmenitiesInfoIconContext {
    attribute: string;
    data: any;
}[]

export const AmenitiesInfoIcon: React.FC<AmenitiesInfoIconContext> = ({ attribute, data }) => {

    function renderIconFromAttrib(action: string){
        switch(action){
            case 'hasPowerSupply':
                return data?.['hasPowerSupply'] ? <PowerIcon /> : <PowerOffIcon />;
            case 'hasWifi':
                return data?.['hasWifi'] ? <WifiIcon /> : <WifiOffIcon />;
            case 'hasRestroom':
                return data?.['hasRestroom'] ? <WcIcon /> : null;
            case 'hasProjector':
                return data?.['hasProjector'] ? <TvIcon /> : <TvOffIcon />;
            case 'hasHDMI':
                return data?.['hasHDMI'] ? <UsbIcon /> : <UsbOffIcon />;
            case 'hasFlowiderCare':
                return data?.['hasFlowiderCare'] ? <SentimentSatisfiedAltIcon /> : <SentimentDissatisfiedIcon />;
            case 'hasAirCondition':
                return data?.['hasAirCondition'] ? <HvacIcon /> : <AirIcon />;
            case 'hasNapZone':
                return data?.['hasNapZone'] ? <BedtimeIcon /> : <BedtimeOffIcon />;
            case 'hasSnackAndBeverage':
                return data?.['hasSnackAndBeverage'] ? <RestaurantIcon /> : <NoMealsIcon />;
            case 'hasCCTVorSecurity':
                return data?.['hasCCTVorSecurity'] ? <VideocamIcon /> : <VideocamOffIcon />;
            default:
                break;
        }
    }

    function renderMessageFromAttrib(action: string){
        switch(action){
            case 'hasPowerSupply':
                const plug = "ปลั๊กไฟ/ปลั๊กพ่วง";
                return data?.['hasPowerSupply'] ? plug : "ไม่มี"+plug;
            case 'hasWifi':
                const internet = "อินเทอร์เนต";
                return data?.['hasWifi'] ? internet : "ไม่มี"+internet;
            case 'hasRestroom':
                const restroom = "ห้องน้ำ"
                return data?.['hasRestroom'] ? restroom : "ไม่มี"+restroom;
            case 'hasProjector':
                const projector = "จอแสดงผล"
                return data?.['hasProjector'] ? projector : "ไม่มี"+projector;
            case 'hasHDMI':
                const hdmi = "สาย HDMI"
                return data?.['hasHDMI'] ? hdmi : "ไม่มี"+hdmi;
            case 'hasFlowiderCare':
                const care = "การดูแลอันอบอุ่นจากเจ้าของ"
                return data?.['hasFlowiderCare'] ? care : "ไม่มี"+care;
            case 'hasAirCondition':
                const air = "เครื่องปรับอากาศ"
                return data?.['hasAirCondition'] ? air : "ไม่มี"+air;
            case 'hasNapZone':
                const nap = "โซนนอนหลับ"
                return data?.['hasNapZone'] ? nap : "ไม่มี"+nap;
            case 'hasSnackAndBeverage':
                const snack = "ขนม/เครื่องดื่ม"
                return data?.['hasSnackAndBeverage'] ? snack : "ไม่มี"+snack;
            case 'hasCCTVorSecurity':
                const cctv = "การรักษาความปลอดภัย"
                return data?.['hasCCTVorSecurity'] ? cctv : "ไม่มี"+cctv;
            default:
                break;
        }
    }
    
    
    return (
        <Card>
            <Container>
                <Icon>
                    { renderIconFromAttrib(attribute) }
                </Icon>
                <p>
                    { renderMessageFromAttrib(attribute) }
                </p>
            </Container>
        </Card>  
    );
}

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Container = styled.div`
    display: grid;
    margin-bottom: 4px;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
    width: 100%;

    p {
        font-weight: 400;
    }
`;

const Icon = styled.div`
   width: 24px;
   height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;
`;