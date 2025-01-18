import React from 'react'
import Link from 'next/link'
export default function notfound() {
  return (
    <>
        <section class="pt-5">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<img src="/assets/images/error404-01.svg" class="h-200px h-md-400px mb-4" alt=""/>
				<h1 class="display-1 text-danger mb-0">404</h1>
				<h2>وای نه، مشکلی پیش آمد!</h2>
				{/* <p class="mb-4">یا مشکلی پیش آمده یا این صفحه دیگر وجود ندارد.</p> */}
				<Link href="/" class="btn btn-primary mb-0">برگشت به صفحه اصلی</Link>
			</div>
		</div>
	</div>
</section>
    </>
  )
}
