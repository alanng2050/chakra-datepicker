import { HStack, IconButton, Input, Text } from '@chakra-ui/react'
import DatePicker, { DatePickerProps } from 'react-datepicker'
import { forwardRef } from 'react'
import { NextIcon } from './NextIcon'
import { BackIcon } from './BackIcon'
import { getMonthName } from './utils'

export const ChakraDatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    return (
      <DatePicker
        popperPlacement="bottom-end"
        showPopperArrow={false}
        renderCustomHeader={(headerProps) => {
          return (
            <HStack
              sx={{
                mb: 1,
                justifyContent: 'space-between',
                '& svg': {
                  width: '20px',
                  height: '20px',
                },
              }}
            >
              <IconButton
                onClick={headerProps.decreaseMonth}
                size="sm"
                variant="ghost"
                icon={<BackIcon />}
                aria-label="next"
              />
              <Text>
                {getMonthName(
                  headerProps.date.getMonth(),
                  props.showMonthYearPicker ? 'short' : 'long'
                )}{' '}
                {headerProps.date.getFullYear()}
              </Text>
              <IconButton
                onClick={headerProps.increaseMonth}
                size="sm"
                variant="ghost"
                icon={<NextIcon />}
                aria-label="next"
              />
            </HStack>
          )
        }}
        customInput={<Input ref={ref} />}
        {...props}
      />
    )
  }
)

ChakraDatePicker.displayName = 'ChakraDatePicker'
