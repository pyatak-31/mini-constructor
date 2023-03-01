<template>
    <div
        class="modal-wrapper"
        tabindex="-1"
        @keydown.esc="close"
    >
        <transition name="overlay" appear>
            <div
                class="modal-overlay"
                v-if="isOpen"
                @click="close"
            ></div>
        </transition>
        
        <transition name="modal" appear="">
            <div class="modal" v-if="isOpen">
                <div class="modal__header">
                    <h3
                        class="modal__title"
                        v-if="title"    
                    >
                        {{ title }}
                    </h3>

                    <ui-button
                        class="modal__close-btn"
                        theme="danger"
                        size="small"
                        @onClick="close" 
                    >
                        X
                    </ui-button>
                </div>

                <div class="modal__body">
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'AppModal',

        components: {
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
        },

        data() {
            return {
                isOpen: true
            }
        },

        props: {
            title: String
        },

        methods: {
            close() {
                console.log(123);
                this.isOpen = false;
                setTimeout(() => this.$emit('onClose'), 500);
            }
        },

        mounted() {
            document.body.style.overflow = 'hidden';
            this.$el.focus()
        },

        beforeDestroy() {
            document.body.style.overflow = 'initial';
        }
    }
</script>

<style lang="scss" scoped>
    .modal-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 5;
        background-color: $primary-50;
    }

    .modal {
        position: relative;
        z-index: 15;
        min-width: 300px;
        width: 100%;
        max-width: 500px;
        margin-right: 10px;
        margin-left: 10px;
        // padding: 20px;
        background-color: $white;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: $shadow-2;

        &__header {
            display: flex;
            align-items: center;
            padding: 20px;
            background-color: $grey-2;
        }

        &__title {
            @include font($dark, 22px, 25px, 700);
        }

        &__close-btn {
            margin-left: auto;
        }

        &__body {
            padding: 20px;
            background-color: $white;
        }
    }

    .overlay-enter-active {
        animation: overlay 0.5s;
    }
    .overlay-leave-active {
        animation: overlay 0.5s reverse;
    }
    @keyframes overlay {
        0% {
            opacity: 0;
        }
    
        100% {
            opacity: 1;
        }
    }

    .modal-enter-active {
        animation: modal 0.5s;
    }
    .modal-leave-active {
        animation: modal 0.5s reverse;
    }
    @keyframes modal {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }
</style>