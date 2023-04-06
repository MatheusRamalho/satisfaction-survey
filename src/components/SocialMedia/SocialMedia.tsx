import { ReactSVG } from 'react-svg';

import facebookIcon from '../../assets/svgs/icon-facebook.svg';
import instagramIcon from '../../assets/svgs/icon-instagram.svg';
import twitterIcon from '../../assets/svgs/icon-twitter.svg';
import youtubeIcon from '../../assets/svgs/icon-youtube.svg';

import { SocialMediaItemWrapper, SocialMediaWrapper } from "./SocialMedia.styles";

export const SocialMedia = () => {
    return (
        <SocialMediaWrapper>
            <SocialMediaItemWrapper>
                <ReactSVG
                    src={facebookIcon}
                    role="img"
                    aria-label="Facebook logo marca"
                />
            </SocialMediaItemWrapper>

            <SocialMediaItemWrapper>
                <ReactSVG
                    src={instagramIcon}
                    role="img"
                    aria-label="Instagram logo marca"
                />
            </SocialMediaItemWrapper>

            <SocialMediaItemWrapper>
                <ReactSVG
                    src={twitterIcon}
                    role="img"
                    aria-label="Twitter logo marca"
                />
            </SocialMediaItemWrapper>

            <SocialMediaItemWrapper>
                <ReactSVG
                    src={youtubeIcon}
                    role="img"
                    aria-label="Youtube logo marca"
                />
            </SocialMediaItemWrapper>
        </SocialMediaWrapper>
    );
}
