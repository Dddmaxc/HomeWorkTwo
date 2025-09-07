import { useSelector } from 'react-redux'
import s from './Loader.module.css'
import { AppStoreType } from './bll/store'

export const Loader = () => {
 const loading = useSelector((state: AppStoreType) => state.loading)
 return <>
 {loading && <div className={s.loader}/>}
 </>
}
