const { test } = require('@jest/globals')
const ytch = require('../index')
/* eslint no-undef: "off" */
describe('Channel stats', () => {
  test('Channel stats', () => {
    const parameters = { channelId: 'UCMO51vS4kaOSLqBD9bmZGIg', channelIdType: 1 }
    return ytch.getChannelStats(parameters).then((data) => {
      expect(data.joinedDate).toBe(1355202000000)
    })
  })
  test('Channel with videos', () => {
    const parameters = { channelId: 'UCfMJ2MchTSW2kWaT0kK94Yw', channelIdType: 1 }
    return ytch.getChannelStats(parameters).then((data) => {
      expect(data.viewCount).not.toBe(0)
    })
  })
})
