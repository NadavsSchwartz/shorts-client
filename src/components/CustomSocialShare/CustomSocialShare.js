const isMobileOrTablet = () => {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
};
const SocialTargetBaseUrl = [
  { name: 'Twitter', value: 'https://twitter.com/intent/tweet?url=' },
  { name: 'Facebook', value: 'https://www.facebook.com/sharer/sharer.php?u=' },
  { name: 'Telegram', value: 'https://telegram.me/share/url?url=' },
  { name: 'Reddit', value: 'https://www.reddit.com/submit?url=' },
  {
    name: 'WhatsApp',
    value: `https://${
      isMobileOrTablet ? 'api' : 'web'
    }.whatsapp.com/send?text=`,
  },
];

const CustomSocialShare = async (url, SocialTarget) => {
  const encodedURI = await encodeURI(url);
  const correctBaseURI = await SocialTargetBaseUrl.find(
    (SocialLogin) => SocialLogin.name === SocialTarget,
  ).value;
  console.log(encodeURI, correctBaseURI);
  return window.open(
    `${correctBaseURI}${encodedURI}`,
    '_blank',
    'width=550,height=400',
  );
};
export default CustomSocialShare;
