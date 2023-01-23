import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { IconExploreCard } from "../icon/IconExploreCard";

// Data
import { IconExploreCardDetail } from "../data/IconExploreCardDetail";

export const ExploreCard: React.FC = (any) => {

    const navigate = useNavigate();

    function exploreCardClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/information", { replace: false });
    }

    return(
        <Warp>
            <Card onClick={exploreCardClick}>
                <img src='https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
                <Collum>
                    <h3>บ้านแม่เถาสเปซ</h3>
                    <h3>08:00 - 22:00</h3>
                </Collum>
                <h4>ซอยวัดอุโมงค์ เชียงใหม่ ประเทศไทย</h4>
                <p>60 บาท/ชั่วโมง</p>
                    <div className="icon-card">
                        {IconExploreCardDetail.map((elem, key) => {
                        return <IconExploreCard {...elem} />
                        })}
                    </div>
            </Card>
            <Card onClick={exploreCardClick}>
                <img src='https://images.unsplash.com/photo-1557804500-7a58fbcd4d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80' alt="" />
                <Collum>
                    <h3>Proof: startup space</h3>
                    <h3>07:00 - 23:59</h3>
                </Collum>
                <h4>สันติธรรม เชียงใหม่ ประเทศไทย</h4>
                <p>60 บาท/ชั่วโมง</p>
                    <div className="icon-card">
                        {IconExploreCardDetail.map((elem, key) => {
                        return <IconExploreCard {...elem} />
                        })}
                    </div>
            </Card>
            <Card onClick={exploreCardClick}>
                <img src='https://coworker.imgix.net/photos/thailand/chiang-mai/yellow-coworking/4-1649225217.jpg?w=800&h=0&q=90&auto=format,compress&fit=crop&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle' alt="" />
                <Collum>
                    <h3>Yellow @Nimman</h3>
                    <h3>00:00 - 23:59</h3>
                </Collum>
                <h4>นิมมานเหมินต์ เชียงใหม่ ประเทศไทย</h4>
                <p>60 บาท/ชั่วโมง</p>
                    <div className="icon-card">
                        {IconExploreCardDetail.map((elem, key) => {
                        return <IconExploreCard {...elem} />
                        })}
                    </div>
            </Card>
            <Card onClick={exploreCardClick}>
                <img src='https://images.unsplash.com/photo-1601762429744-46fe92ccd903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt="" />
                <Collum>
                    <h3>Coworking space</h3>
                    <h3>08:00 - 20:00</h3>
                </Collum>
                <h4>ห้วยแก้ว เชียงใหม่ ประเทศไทย</h4>
                <p>60 บาท/ชั่วโมง</p>
                    <div className="icon-card">
                        {IconExploreCardDetail.map((elem, key) => {
                        return <IconExploreCard {...elem} />
                        })}
                    </div>
            </Card>
            <Card onClick={exploreCardClick}>
                <img src='https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
                <Collum>
                    <h3>Coworking space</h3>
                    <h3>08:00 - 20:00</h3>
                </Collum>
                <h4>ห้วยแก้ว เชียงใหม่ ประเทศไทย</h4>
                <p>60 บาท/ชั่วโมง</p>
                    <div className="icon-card">
                        {IconExploreCardDetail.map((elem, key) => {
                        return <IconExploreCard {...elem} />
                        })}
                    </div>
            </Card>
            <Card onClick={exploreCardClick}>
                <img src='https://images.unsplash.com/photo-1601762429744-46fe92ccd903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt="" />
                <Collum>
                    <h3>Coworking space</h3>
                    <h3>08:00 - 20:00</h3>
                </Collum>
                <h4>ห้วยแก้ว เชียงใหม่ ประเทศไทย</h4>
                <p>60 บาท/ชั่วโมง</p>
                    <div className="icon-card">
                        {IconExploreCardDetail.map((elem, key) => {
                        return <IconExploreCard {...elem} />
                        })}
                    </div>
            </Card>
        </Warp>
    );
}

const Warp = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 16px;
`;

const Card = styled.button`
    padding: 16px;
    background: var(--white);
    border: 1px solid var(--grey-200);
    border-radius: 16px;
    transition: 1s;
    font-family: var(--brand-font);
    text-align: left;
    /* font-weight: 500; */
    
    :hover {
        box-shadow: 0px 0px 20px 0px var(--grey-200);
    }
    
    img{
        aspect-ratio: 1 / 1;
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 8px;
    }

    h3{
        margin-top: 8px;
        font-size: 18.72PX;
        color: var(--black);
    }

    h4{
        color: var(--grey-600);
        font-size: 16px;
    }

    p{
        font-size: 16px;
        color: var(--black);
    }

    .icon-card {
        display: flex;
        gap: 2rem;
        color: var(--black);
    }
`;

const Collum = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
`;