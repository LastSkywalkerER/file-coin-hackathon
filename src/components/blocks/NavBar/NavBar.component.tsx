import { Box, Link, Typography } from '@mui/material'
import clsx from 'clsx'
import { useInjection } from 'inversify-react'
import { FC } from 'react'
import { Link as NavLink } from 'react-router-dom'

import emailIcon from '@/assets/social-media-icons/email_32x32.png'
import facebookIcon from '@/assets/social-media-icons/facebook_32x32.png'
import instagramIcon from '@/assets/social-media-icons/instagram_512x512.png'
import linkedInIcon from '@/assets/social-media-icons/linkedin_512x512.png'
import twitterIcon from '@/assets/social-media-icons/twitter_32x32.png'
import { Button } from '@/components/controls'
import { routes } from '@/constants/routes'
import { shortenAddress } from '@/helpers/shortenAddress'
import { useAccounts } from '@/hooks/useAccounts'
import { IMetamask } from '@/services'

import { useClasses } from './NavBar.styles'

export const NavBar: FC = () => {
  const { address, isConnected } = useAccounts()
  const { connectWallet } = useInjection<IMetamask>(IMetamask.$)

  const { classes } = useClasses()

  return (
    <Box className={classes.navBar}>
      <Box className={classes.navBlock}>
        <Link href="https://www.facebook.com/profile.php?id=100002195195807">
          <img src={facebookIcon} alt="facebook" className={classes.img} />
        </Link>
        <Link href="https://twitter.com/maxdr1998">
          <img src={twitterIcon} alt="twitter" className={classes.img} />
        </Link>
        <Link href="mailto:maxdr1998@gmail.com">
          <img src={emailIcon} alt="email" className={classes.img} />
        </Link>
        <Link href="https://www.linkedin.com/in/DrozdMaksim">
          <img src={linkedInIcon} alt="email" className={classes.img} />
        </Link>
        <Link href="https://www.instagram.com/lastskywalkerer/">
          <img src={instagramIcon} alt="email" className={classes.img} />
        </Link>
      </Box>

      <Box className={clsx(classes.navBlock, classes.navBlockRight)}>
        {routes.map((route) => (
          <NavLink key={route.name} to={`/${route.name}`} className={classes.navItem}>
            {route.name}
          </NavLink>
        ))}

        {isConnected ? (
          <Typography className={classes.navItem}>{shortenAddress(address)}</Typography>
        ) : (
          <Button
            classes={{ root: classes.buttonHeader }}
            variant="contained"
            onClick={connectWallet}
          >
            Connect
          </Button>
        )}
      </Box>
    </Box>
  )
}
