import { observer } from 'mobx-react'

import * as React from 'react'
import { Switch, Flex, InputItem } from 'antd-mobile';

const useState = React.useState
function Main(){
    const [item, setItem] = useState(true)
    const [client, setClient] = useState(true)
    const [unit, setUnit] = useState(true)
    const [scaleNum,setScaleNum] = useState(true)
    return (
        <div>
            <Flex className="m-2">
                客户名称
                <Switch className = "mx-2"
                checked = {client}
                onChange={() => {
                    setClient(!client)
                }}/>
            </Flex>
            <Flex className="m-2">
                商品名称
                <Switch className = "mx-2"
                checked = {item}
                onChange={() => {
                    setItem(!item)
                }}/>
            </Flex>
            <Flex className="m-2">
                计量单位
                <Switch className = "mx-2"
                checked = {unit}
                onChange={() => {
                    setUnit(!unit)
                }}/>
            </Flex>
            <Flex className="m-2">
                分拣数量
                <Switch className = "mx-2"
                checked = {scaleNum}
                onChange={() => {
                    setScaleNum(!scaleNum)
                }}/>
            </Flex>
            <Flex>
                <InputItem
                placeholder="单位毫米（mm）" type="number"
                >打印纸宽度</InputItem>
            </Flex>
            <Flex>
                <InputItem
                placeholder="单位毫米（mm）" type="number"
                >打印纸高度</InputItem>
            </Flex>
        </div>
    )
}
export default observer(Main)