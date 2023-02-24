<template>
    <div class="form-input">
        <textarea
            :id="id"
            class="form-input__field"
            :class="{
                'form-input__field--error': error,
                'form-input__field--disable-resize': !enableResize,
            }"
            :required="required"
            v-bind="$attrs"
            :value="value"
            @input="onChange($event)"
        ></textarea>

        <label
            :for="id"
            class="form-input__label"
            v-if="label"
        >
            {{ label }}<span v-if="required">*</span>
        </label>

        <small
            class="form-input__error"
            v-if="error"
        >
            {{ error }}
        </small>
    </div>
</template>

<script>
export default {
    name: 'UiTextarea',

    props: {
        id: String,
        label: String,
        value: [String, Number],
        required: Boolean,
        error: String,
        enableResize: Boolean,
    },

    methods: {
        onChange(event) {
            let value = event.target.value;
            if (this.type === 'number') {
                value = Number(value);
            }
            this.$emit('input', value);
        },
    }
};
</script>

<style scoped lang="scss">
    $text-color: $dark;

    .form-input {
        display: flex;
        flex-direction: column;

        &__label {
            align-self: flex-start;
            order: 0;
            margin-bottom: 5px;
            padding-left: 0px;
            @include font($text-color, 16px, 24px, 400);
            cursor: pointer;
            transition: font-weight .3s;
        }

        &__field {
            order: 1;
            width: 100%;
            padding: 8px 16px;
            @include font($text-color, 14px, 20px, 400);
            border: 1px solid $grey-2;
            border-radius: 4px;
            @include scrollbar();

            &::placeholder {
                color: $grey-1;
            }

            &:focus {
                border-color: $primary-50;

                & + .form-input__label {
                    font-weight: 700;
                }
            }

            &--disable-resize {
                resize: none;
            }

            &--error {
                border-color: $danger;
            }
        }

        &__error {
            order: 3;
            margin-top: 2px;
            @include font($danger, 12px, 16px, 400);
        }
    }
</style>
