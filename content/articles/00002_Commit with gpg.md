---
slug: commit-with-gpg
title: Commit with gpg
description: "A step-by-step guide to setting up GPG for signing Git commits."
createdDate: 2025-05-17T10:27:00+08:00
updatedDate: 2025-05-17T10:27:00+08:00
author: Lyle Zheng

tags:
  - Git
  - gpg
categories:
  - Technology

draft: false
toc: true
order: 1
keywords:
  - xxx
---

> https://www.youtube.com/watch?v=n4KM3kEDmHk

# Install gpg and configs

```shell
brew install gpg2 gnupg pinentry-mac
```

<img src="./_assets/00002_Commit%20with%20gpg/w=2000.png" alt="img" style="zoom:50%;" />

```shell
mkdir ~/.gnupg
```

```shell
which pinentry-mac
```

output:

```shell
which pinentry-mac
/opt/homebrew/bin/pinentry-mac
```

Add something below into `~/.gnupg/gpg-agent.conf`:

```shell
pinentry-program /opt/homebrew/bin/pinentry-mac
```

```shell
echo 'use-agent' > ~/.gnupg/gpg.conf
```

Add something below into `.bashrc` or `.zshrc`:

```shell
export GPG_TTY=$(tty)
```

```shell
source ~/.zshrc
```

```shell
chmod 700 ~/.gnupg
```

```shell
killall gpg-agent
```

# Generate gpg key

```shell
gpg --full-gen-key
```

output:

```
lyle@LyleMac ~ % gpg --full-gen-key
gpg (GnuPG) 2.4.8; Copyright (C) 2025 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

gpg: keybox '/Users/lyle/.gnupg/pubring.kbx' created
Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card
Your selection? 4
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 0
Key does not expire at all
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: Lyle Zheng
Email address: dhzhme@gmail.com
Comment: tinywaves
You selected this USER-ID:
    "Lyle Zheng (tinywaves) <dhzhme@gmail.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: /Users/lyle/.gnupg/trustdb.gpg: trustdb created
gpg: directory '/Users/lyle/.gnupg/openpgp-revocs.d' created
gpg: revocation certificate stored as '/Users/lyle/.gnupg/openpgp-revocs.d/8ECF96C03E0D0F12DD661AC44C84F5B1EF13F8EA.rev'
public and secret key created and signed.

Note that this key cannot be used for encryption.  You may want to use
the command "--edit-key" to generate a subkey for this purpose.
pub   rsa4096 2025-05-21 [SC]
      8ECF96C03E0D0F12DD661AC44C84F5B1EF13F8EA
uid                      Lyle Zheng (tinywaves) <dhzhme@gmail.com>
```

Before generating this key, you will need to set a strong passphrase (remember it, you'll need it for signing commits).

```shell
gpg --armor --export 8ECF96C03E0D0F12DD661AC44C84F5B1EF13F8EA
```

output:

```
lyle@LyleMac ~ % gpg --armor --export 8ECF96C03E0D0F12DD661AC44C84F5B1EF13F8EA
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGgtiX8BEADE72pfmroEDcndL1ehBRFHIMKTmp1jpP+Vv5osyExMPOkxOuz6
0ezARKE4SEES467iPVXBQchgmWLR/cx6VjNHyqn++Ak1iSWHhVx4jG/2Gex/Feks
Cgso6zkZBy6VmwUwd/M4V0ueiuUmUJsV483sIMcxd+I6vcIkI4aBf+WpDS65welI
eak50GO1BwiQCaiWpaXHhmMDJMxe/RQ0ycmdhgdOcbqtkqAgRySMKb43k8txxghx
DstgjyR44Mtr44el2DDk4VUEvOU1SDni36FQCcyS+cqaTCvlY/4Ty1c2kAVXtIaR
eX/KYJ3uX8/4sbs3h6UbBokJUYNsMRy0I0GBeqyvTRbfzqj/5VA3EaMyU43y26+E
xK/Z2LHTuc27uvLSwyA8xdh3AGeoBJpQQns4VX7Lkg308kH6il2/FLI9xNmQy2W2
A0RL6S+3YvzocI/bBcOrCprburbyBs00FBpFhNL1ZiLRbj46YdwYNxws+8TQpX1R
lCaUaDwCOEnGd4YP855Wby8sdCLFsBFW2rEs9M62N/xRGioHN8dMozasvpTVrPWo
LvU3ROLSGAJ6CKnZ3B0mLe2B62gPrqM8LplEkH80zvXKMNlhl5/M0xzYdz9uYKfw
t5okVeAa9ft81RGQHvSY6X39NBpuAG8s1MRFi+Me+Vc/jfnwwZt8ggF2wwARAQAB
tClMeWxlIFpoZW5nICh0aW55d2F2ZXMpIDxkaHpobWVAZ21haWwuY29tPokCUQQT
AQgAOxYhBI7PlsA+DQ8S3WYaxEyE9bHvE/jqBQJoLYl/AhsDBQsJCAcCAiICBhUK
CQgLAgQWAgMBAh4HAheAAAoJEEyE9bHvE/jqas8QAJ4xKv57uC0PbzMju+Z6/NcO
9la35jH+GvmLuS/Xkwzx2NAjlWoW6YZIgj36jygn66T9Nli61WAF9FoK1pOsH01T
jQfb5tPuIIzHHbUsACTfHB18QNQQLt/+wX7n2N9N7SyK3+lQuisco+3+UDI5UC7U
f1R6N7DUGEG20nm08cdq9GX2wrYwR8dEQRsV3Ii1926AVWfEZwS28uuiDcXnnyrQ
YnVIuAfb07t0u5gTpcFqH6tobPTvFqPNZv1W4F6h1uvP2cvFkxSEp3A7XxO6+2Fz
424z8dTE1D2ByvoBqbfCyBSrOjvoGjSJJVOTpzQMn0BSlLp/vxMoaN0YFxQxgkPX
H+GgTJJr/quyiKN3xM7BNa1ge9cDLjqb5tsmBZ9c0p6oK6ZT8us6N+kYUoWSF1Z4
MeRsHq9LMSt5uLykgX311JQQFGyVDKpzEPgQiJ7TvzIVVwUVIbMcipdHupI/eMzm
6jwj9Kpcbrfk+JDcI7KMY/V0LD971wAG5ZWSU6HHmRZoXThLP4CsTfTfmhK3qxHD
Kf7iweb4Vz9JhSwcBcaAOcNaGBYPXF7EuMwOLeq8fanqYzyP2zxDKfp+zTNUDbJV
gFEMhcGsMSDGfU8Ditls2S97YZS+Bp0KxaAE3TLzZ6+dsrCPEj+BMMJS+NCw9ViO
41ClCE36X//dSpZVLchB
=ZBgH
-----END PGP PUBLIC KEY BLOCK-----
```

# Config git

```shell
git config --global user.name "Lyle Zheng"
git config --global user.email "dhzhme@gmail.com"
git config --global gpg.program $(which gpg)
git config --global user.signingkey 8ECF96C03E0D0F12DD661AC44C84F5B1EF13F8EA
git config --global commit.gpgSign true
```

```shell
git config user.name "Lyle Zheng"
git config user.email "dhzhme@gmail.com"
git config gpg.program $(which gpg)
git config user.signingkey 8ECF96C03E0D0F12DD661AC44C84F5B1EF13F8EA
git config commit.gpgSign true
```

# VSCode configs

Add to `settings.json`:

```json
{
  ...
  "git.enableCommitSigning": true
  ...
}
```

# GitHub or others configs

Add PUBLIC KEY when `gpg --armor --export 8ECF96C03E0D0F12DD661AC44C84F5B1EF13F8EA` to GitHub and so on:

<img src="./_assets/00002_Commit%20with%20gpg/w=2000-20251220032641611.png" alt="img" style="zoom:50%;" />

# Others

Display all gpg keys on your devices:

```shell
gpg --list-keys
```

output:

```
lyle@LyleMac ~ % gpg --list-keys
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
/Users/lyle/.gnupg/pubring.kbx
------------------------------
pub   rsa4096 2025-05-21 [SC]
      8ECF96C03E0D0F12DD661AC44C84F5B1EF13F8EA
uid           [ultimate] Lyle Zheng (tinywaves) <dhzhme@gmail.com>
```
