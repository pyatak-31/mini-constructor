<template>
    <svg v-if="name === 'save'" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 21V13H7V21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 3V8H15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'image'" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 15L16 10L5 21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'plus'" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'circle-plus'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 8V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'circle-alert'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_29)">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16H12.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_30_29">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>

    <svg v-else-if="name === 'circle-check'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 4L12 14.01L9 11.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'circle-help'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_470)">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.08997 9.00001C9.32507 8.33167 9.78912 7.76811 10.3999 7.40914C11.0107 7.05016 11.7289 6.91894 12.4271 7.03872C13.1254 7.15849 13.7588 7.52153 14.215 8.06353C14.6713 8.60554 14.921 9.29153 14.92 10C14.92 12 11.92 13 11.92 13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 17H12.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_30_470">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>

    <svg v-else-if="name === 'circle-info'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_485)">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16V12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 8H12.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_30_485">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>

    <svg v-else-if="name === 'emoji-sad'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 9H9.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 9H15.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'emoji-smile'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 9H9.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 9H15.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'cirlce-x'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 9L9 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 9L15 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'file-text'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 2V8H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 13H8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 17H8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 9H9H8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'cards'" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 9.89543 3.89543 9 5 9H23C24.1046 9 25 9.89543 25 11V25C25 26.1046 24.1046 27 23 27H5C3.89543 27 3 26.1046 3 25V11ZM23 11H5V25H23V11Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.58579 5.58579C7.96086 5.21071 8.46957 5 9 5H27C27.5304 5 28.0391 5.21071 28.4142 5.58579C28.7893 5.96086 29 6.46957 29 7V21C29 21.5304 28.7893 22.0391 28.4142 22.4142C28.0391 22.7893 27.5304 23 27 23H24C23.4477 23 23 22.5523 23 22C23 21.4477 23.4477 21 24 21H27V7L9 7L9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10V7C7 6.46957 7.21071 5.96086 7.58579 5.58579Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z" />
    </svg>

    <svg v-else-if="name === 'movie'" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 2V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 2V22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12H22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 7H7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17H7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 17H22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 7H22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="name === 'eye'" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.54289 10.7929C6.92672 8.40907 10.6674 6 16 6C21.3326 6 25.0733 8.40907 27.4571 10.7929C28.6461 11.9819 29.5035 13.1692 30.065 14.0609C30.3462 14.5076 30.5546 14.8823 30.6944 15.1493C30.7644 15.2828 30.8173 15.3896 30.8536 15.4651C30.8718 15.5029 30.8859 15.5329 30.8959 15.5545L30.9079 15.5806L30.9116 15.5889L30.9129 15.5918L30.9134 15.5929C30.9136 15.5934 30.9138 15.5939 30 16C30.9138 16.4061 30.9136 16.4066 30.9134 16.4071L30.9129 16.4082L30.9116 16.4111L30.9079 16.4194L30.8959 16.4455C30.8859 16.4671 30.8718 16.4971 30.8536 16.5349C30.8173 16.6104 30.7644 16.7172 30.6944 16.8507C30.5546 17.1177 30.3462 17.4924 30.065 17.9391C29.5035 18.8308 28.6461 20.0181 27.4571 21.2071C25.0733 23.5909 21.3326 26 16 26C10.6674 26 6.92672 23.5909 4.54289 21.2071C3.35387 20.0181 2.49647 18.8308 1.93502 17.9391C1.6538 17.4924 1.4454 17.1177 1.30557 16.8507C1.23563 16.7172 1.18273 16.6104 1.14636 16.5349C1.12817 16.4971 1.11411 16.4671 1.10411 16.4455L1.09213 16.4194L1.08841 16.4111L1.08711 16.4082L1.0866 16.4071C1.08639 16.4066 1.08619 16.4061 2 16C1.08619 15.5939 1.08639 15.5934 1.0866 15.5929L1.08711 15.5918L1.08841 15.5889L1.09213 15.5806L1.10411 15.5545C1.11411 15.5329 1.12817 15.5029 1.14636 15.4651C1.18273 15.3896 1.23563 15.2828 1.30557 15.1493C1.4454 14.8823 1.6538 14.5076 1.93502 14.0609C2.49647 13.1692 3.35387 11.9819 4.54289 10.7929ZM2 16L1.08619 15.5939C0.971271 15.8524 0.971271 16.1476 1.08619 16.4061L2 16ZM3.11811 16C3.23576 16.2204 3.4047 16.5196 3.62748 16.8734C4.12853 17.6692 4.89613 18.7319 5.95711 19.7929C8.07328 21.9091 11.3326 24 16 24C20.6674 24 23.9267 21.9091 26.0429 19.7929C27.1039 18.7319 27.8715 17.6692 28.3725 16.8734C28.5953 16.5196 28.7642 16.2204 28.8819 16C28.7642 15.7796 28.5953 15.4804 28.3725 15.1266C27.8715 14.3308 27.1039 13.2681 26.0429 12.2071C23.9267 10.0909 20.6674 8 16 8C11.3326 8 8.07328 10.0909 5.95711 12.2071C4.89613 13.2681 4.12853 14.3308 3.62748 15.1266C3.4047 15.4804 3.23576 15.7796 3.11811 16ZM30 16L30.9138 16.4061C31.0287 16.1476 31.0287 15.8524 30.9138 15.5939L30 16Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12ZM10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16Z" />
    </svg>

    <svg v-else-if="name === 'pencil'" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2929 3.29289C23.6834 2.90237 24.3166 2.90237 24.7071 3.29289L28.7071 7.29289C29.0976 7.68342 29.0976 8.31658 28.7071 8.70711L16.7071 20.7071C16.5196 20.8946 16.2652 21 16 21H12C11.4477 21 11 20.5523 11 20V16C11 15.7348 11.1054 15.4804 11.2929 15.2929L23.2929 3.29289ZM13 16.4142V19H15.5858L26.5858 8L24 5.41421L13 16.4142Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2929 6.29289C20.6834 5.90237 21.3166 5.90237 21.7071 6.29289L25.7071 10.2929C26.0976 10.6834 26.0976 11.3166 25.7071 11.7071C25.3166 12.0976 24.6834 12.0976 24.2929 11.7071L20.2929 7.70711C19.9024 7.31658 19.9024 6.68342 20.2929 6.29289Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6L6 6L6 26H26V15C26 14.4477 26.4477 14 27 14C27.5523 14 28 14.4477 28 15V26C28 26.5304 27.7893 27.0391 27.4142 27.4142C27.0391 27.7893 26.5304 28 26 28H6C5.46957 28 4.96086 27.7893 4.58579 27.4142C4.21071 27.0391 4 26.5304 4 26V6C4 5.46957 4.21071 4.96086 4.58579 4.58579Z" />
    </svg>

    <svg v-else-if="name === 'arrow-up'" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L26.7071 19.2929C27.0976 19.6834 27.0976 20.3166 26.7071 20.7071C26.3166 21.0976 25.6834 21.0976 25.2929 20.7071L16 11.4142L6.70711 20.7071C6.31658 21.0976 5.68342 21.0976 5.29289 20.7071C4.90237 20.3166 4.90237 19.6834 5.29289 19.2929L15.2929 9.29289Z" />
    </svg>

    <svg v-else-if="name === 'arrow-down'" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L16 20.5858L25.2929 11.2929C25.6834 10.9024 26.3166 10.9024 26.7071 11.2929C27.0976 11.6834 27.0976 12.3166 26.7071 12.7071L16.7071 22.7071C16.3166 23.0976 15.6834 23.0976 15.2929 22.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929Z" />
    </svg>
</template>

<script>
    export default {
        name: 'UiIcon',
    
        props: {
            name: {
                type: String,
                required: true,
            }
        }
    };
</script>
