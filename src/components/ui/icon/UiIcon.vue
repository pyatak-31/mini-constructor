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
