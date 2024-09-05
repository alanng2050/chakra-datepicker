export const chakraDatePickerStyle = {
  ' .react-datepicker-popper': {
    zIndex: 9999,
  },

  '.react-datepicker__tab-loop': {
    position: 'absolute',
  },
  '.react-datepicker': {
    // ========== hide label
    '& >.react-datepicker__aria-live': {
      display: 'none',
    },

    // container stle
    boxShadow: 'md',
    p: 3,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    bg: '#fff',

    '& .react-datepicker__day-names': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontSize: 'xs',
      textAlign: 'center',
      color: 'gray.400',
    },

    // ======== for date pick =============
    '& .react-datepicker__month': {
      display: 'flex',
      flexDir: 'column',
      gap: '2px',
      '& >.react-datepicker__week, & >.react-datepicker__month-wrapper': {
        display: 'flex',
        gap: '2px',
        '& .react-datepicker__day, & .react-datepicker__month-text': {
          // bg: isSelected ? 'primary' : '',
          cursor: 'pointer',
          minWidth: 'auto',
          width: '40px',
          height: '40px',
          fontSize: 'md',
          borderRadius: 'md',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          _hover: {
            bg: 'primary',
          },

          '&.react-datepicker__day--selected, &.react-datepicker__month-text--selected':
            {
              bg: 'primary',
            },
        },

        '& .react-datepicker__month-text': {
          width: 16,
        },
      },
    },
  },
}
