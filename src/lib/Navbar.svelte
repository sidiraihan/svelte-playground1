<nav>
	<ul>
		<li>
			<a href="/">home</a>
		</li>
		<li>
			<a href="/about">about</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav ul {
		display: flex;
		justify-content: space-around;
		list-style: none;
		padding: 8px;
		background: #111;
        border-radius: 100px;
		text-decoration: none;

		a {
			color: #fff;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
