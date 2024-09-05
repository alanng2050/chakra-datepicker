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
        renderCustomHeader={(props) => {
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
                onClick={props.decreaseMonth}
                size="sm"
                variant="ghost"
                icon={<BackIcon />}
                aria-label="next"
              />
              <Text>
                {getMonthName(props.date.getMonth(), 'long')}{' '}
                {props.date.getFullYear()}
              </Text>
              <IconButton
                onClick={props.increaseMonth}
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
