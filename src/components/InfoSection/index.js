import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, Column1, Column2, TextWrapper, Heading, TopLine, Subtitle, BtnWrap, InfoRow, ImgWrap, Img } from './InfoElements';

const InfoSection = (props) => {

    return (

        <>

            <InfoContainer lightBg={props.lightBg} id={props.id}>

                <InfoWrapper>

                    <InfoRow imgStart={props.imgStart}>

                        <Column1>

                            <TextWrapper>

                                <TopLine>{props.topLine}</TopLine>

                                <Heading lightText={props.lightText}>{props.headline}</Heading>

                                <Subtitle darkText={props.darkText}>{props.description}</Subtitle>

                                <BtnWrap>
                                    <Button
                                        to="home"
                                        primary={props.primary}
                                        dark={props.dark}
                                    >{props.buttonLabel}</Button>
                                </BtnWrap>

                            </TextWrapper>

                        </Column1>

                        <Column2>

                            <ImgWrap>
                                <ImgWrap>
                                    <Img src={props.img} alt={props.alt} />
                                </ImgWrap>
                            </ImgWrap>

                        </Column2>

                    </InfoRow>

                </InfoWrapper>

            </InfoContainer>

        </>

    )

}

export default InfoSection;
