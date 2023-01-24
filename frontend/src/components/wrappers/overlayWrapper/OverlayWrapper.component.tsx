import Rotate90DegreesCwOutlinedIcon from '@mui/icons-material/Rotate90DegreesCwOutlined'
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined'
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined'
import { memo, NamedExoticComponent } from 'react'
import { PhotoProvider } from 'react-photo-view'

import simpleBG from '@/assets/background/simple-bg.png'
import { WrapperProps } from '@/types'

import { useClasses } from './OverlayWrapper.styles'

export const OverlayWrapper: NamedExoticComponent<WrapperProps> = memo((props: WrapperProps) => {
  const { children } = props
  const { classes } = useClasses()

  return (
    <PhotoProvider
      toolbarRender={({ onScale, scale, rotate, onRotate }) => {
        return (
          <>
            <ZoomInOutlinedIcon
              className="PhotoView-Slider__toolbarIcon"
              onClick={() => onScale(scale + 1)}
            />
            <ZoomOutOutlinedIcon
              className="PhotoView-Slider__toolbarIcon"
              onClick={() => onScale(scale - 1)}
            />
            <Rotate90DegreesCwOutlinedIcon
              className="PhotoView-Slider__toolbarIcon"
              onClick={() => onRotate(rotate + 90)}
            />
          </>
        )
      }}
    >
      <div className={classes.overlay}>
        {children}
        <div className={classes.movingBackground}>
          <img className={classes.backgroundImage} src={simpleBG} alt="background" />
        </div>
      </div>
    </PhotoProvider>
  )
})
