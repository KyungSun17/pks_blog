# Node package manager 프로젝트 생성
```
npm init -y
```

# 패키지 설치해봄 - 설치하면 node-modules안에 생성됨, parcel-bundler에 package.json 안에 필요 패키지도 같이 다운됨
# package-lock.json은 내부에서 사용하는 패키지정보를 담고있음
# 이후 node_modules 파일이 없어도 node-modules는 생성가능 (npm install)
```
npm install parcel-bundler -D
npm install lodash
```

# D 옵션 - 개발용 의존성 패키지 설치 (개발할때만 필요하고 필요하지 않음), 옵션없으면 브라우저에서도 동작할 수 있음

# html 파일에서 ! 하고 tab키 클릭하면 기본 layout 생성됨
 
# parcel index.html 서버에서 구동시킴
- npm run dev : package.json에 표기한 dev script 구동

# import _ from 'lodash' 하면 해당 package에 main구동, _를 사용하여 lodash안에 모듈들 사용가능

# gitignore를 만들어놓으면 git에 업로드 되지 않음 > git init하면 회색으로 표시됨
- git status하면 add되지 않아 빨간색으로 표시 > git add . 해줌
- git 연결 git remote add origin https://github.com/KyungSun17/pks_blog.git
- commit > push 해줌 : git commit -m '프로젝트생성', git push origin master


# sanity 사용
sanity.cmd login -> sanity.cmd init -> sanity.cmd start (localhost에 띄움), sanity.cmd deploy (SaaS에 띄움)

# Slug : 게시물마다 고유한 url 생성용

# sanity Dataset 쿼리예시
```
*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}
```

# 필요데이터 추출 쿼리
```
*[_type == 'post']{
  title,
  subtitle, 
  createdAt, 
  'content' : content[]{
    ..., 
    ...select(_type == 'imageGallery' -> {'images': images[]{..., 'url' : asset -> url}})
  },
  'slug' : slug.current,
  'thumbnail' : {
    'alt' : thumbnail.alt,
    'imageUrl' : thumbnail.asset -> url
  },
  'author' : author -> {
    name,
    role,
    'image' : image.asset -> url
  },
  'tag' : tag -> {
    title,
    'slug' : slug.current
  }
    
}
```