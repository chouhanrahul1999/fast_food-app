import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCartStore } from '@/store/cart.store'
import CustomHeader from '@/components/CustomHeader'

const Cart = () => {
  const { items, getTotalItems, getTotalPrice } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <SafeAreaView className='bg-white h-full'>
      <FlatList
      data={items}
      renderItem={({ item }) => <Text>Cart Items</Text>}
      keyExtractor={(item) => item.id}
      contentContainerClassName='pb-28 px-5 pt-5'
      ListHeaderComponent={() => <CustomHeader title="Your Cart" />}
      />
    </SafeAreaView>
  )
}

export default Cart
