import Image from "next/image";
import { GithubStatsUrls } from "src/constants/githubstatsurl";
import {
  RevealAnimationLeftToRight,
  RevealAnimationRightToLeft,
} from "src/components/animationTemplates/revealAnimation";

export const GithubStats = () => {
  return (
    <div className="flex justify-between items-center 2xl:mx-[4rem]">
      <RevealAnimationLeftToRight duration={0.75} delay={0}>
        <Image
          alt=""
          src={GithubStatsUrls.stats}
          width={500}
          height={500}
          unoptimized
          draggable="false"
        />
      </RevealAnimationLeftToRight>
      <RevealAnimationRightToLeft duration={0.75} delay={0}>
        <Image
          alt=""
          src={GithubStatsUrls.summary}
          width={500}
          height={500}
          unoptimized
          draggable="false"
        />
      </RevealAnimationRightToLeft>
    </div>
  );
};
