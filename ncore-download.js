// if I want to download multiple files

const lenyilok = document.querySelectorAll("[class*=torrent_lenyilo]");

lenyilok.forEach(item => {
	window.open(`torrents.php?action=download&id=${item.id}&key=6d1aa43f261daae1f8da24ddb68cb160`);
});
